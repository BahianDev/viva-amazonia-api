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
    const productions = await this.planoProdutivoRepository.getAll();
    return productions;
  }
}
