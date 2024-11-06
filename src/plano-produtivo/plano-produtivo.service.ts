import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlanoProdutivoDto } from './dto/create-plano-produtivo.dto';
import { PlanoProdutivoRepository } from './plano-produtivo.repository';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class PlanoProdutivoService {
  constructor(
    private readonly planoProdutivoRepository: PlanoProdutivoRepository,
    private readonly userRepository: UserRepository
  ) { }

  async create(createPlanoProdutivoDto: CreatePlanoProdutivoDto, email: string) {
    const {
      endereco,
      tipoDeArea,
      dataInicioPlantio,
      usaFertilizantes,
      usaPesticidas,
      hectare,
      linhas,
      espacamento,
      quantMudasFlorestais,
      quantMudasFrutiferas,
      calcario,
      adulboOrganico,
      especiesMudasFlorestais,
      especiesMudasFlorestaisOutro,
      especiesMudasFrutiferas,
      especiesMudasFrutiferasOutro,
      clicloProducao,
    } = createPlanoProdutivoDto;

    const user = await this.userRepository.get({
      where: {
        email
      }
    })

    if (!user) {
      throw new BadRequestException("Something went wrong!")
    }

    const planoProdutivo = await this.planoProdutivoRepository.create({
      data: {
        userId: user.id,
        endereco,
        tipoDeArea,
        dataInicioPlantio,
        usaFertilizantes,
        usaPesticidas,
        hectare,
        linhas,
        espacamento,
        quantMudasFlorestais,
        quantMudasFrutiferas,
        calcario,
        adulboOrganico,
        especiesMudasFlorestais,
        especiesMudasFlorestaisOutro,
        especiesMudasFrutiferas,
        especiesMudasFrutiferasOutro,
        clicloProducao,
      },
    });
    return planoProdutivo;
  }

  async getAll() {
    const productions = await this.planoProdutivoRepository.getAll({
      include: {
        user: true
      }
    });

    return productions.map(prod => {
      return { ...prod, mudasTotais: prod.quantMudasFlorestais + prod.quantMudasFrutiferas }
    })

  }


  async get(id: string) {
    const production = await this.planoProdutivoRepository.get({
      where: {
        id
      },
      include: {
        user: true
      }
    })

    return production
  }

  async getInfo() {
    const productions = await this.planoProdutivoRepository.getAll({
      include: {
        user: true
      }
    });

    const hectares = productions.map(p => p.hectare)
    const hectaresSum = hectares.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    const mudasFlorestais = productions.map(p => p.quantMudasFlorestais)
    const mudasFlorestaisSum = mudasFlorestais.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    const mudasFrutiferas = productions.map(p => p.quantMudasFrutiferas)
    const mudasFrutiferasSum = mudasFrutiferas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);


    return {
      quantTotalHectares: hectaresSum,
      quantTotalMudasFlorestais: mudasFlorestaisSum,
      quantTotalMudasFrutiferas: mudasFrutiferasSum
    }
  }
}
