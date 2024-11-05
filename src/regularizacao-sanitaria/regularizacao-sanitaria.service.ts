import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegularizacaoSanitariaDto } from './dto/create-regularizacao-sanitaria.dto';
import { RegularizacaoSanitariaRepository } from './regularizacao-sanitaria.repository';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class RegularizacaoSanitariaService {
    constructor(
        private readonly regularizacaoSanitariaRepository: RegularizacaoSanitariaRepository,
        private readonly userRepository: UserRepository
    ) { }

    async create(createPlanoProdutivoDto: CreateRegularizacaoSanitariaDto, email: string) {
        const {
            licenca,
            licencaComp,
            produtosAgricolas,
            controleDePragas,
            usaProdutosQuimicos,
            armazenamentoProdutos,
            tratamentoResiduoAgricolas
        } = createPlanoProdutivoDto;

        const user = await this.userRepository.get({
            where: {
                email
            }
        })

        if (!user) {
            throw new BadRequestException("Something went wrong!")
        }


        const alreadyExists = await this.regularizacaoSanitariaRepository.get({
            where: {
                userId: user.id
            }
        })

        if (alreadyExists) {
            throw new BadRequestException("Something went wrong!")
        }

        const regularizacaoSanitaria = await this.regularizacaoSanitariaRepository.create({
            data: {
                userId: user.id,
                licenca,
                licencaComp,
                produtosAgricolas,
                controleDePragas,
                usaProdutosQuimicos,
                armazenamentoProdutos,
                tratamentoResiduoAgricolas
            },
        });
        return regularizacaoSanitaria;
    }

    async getAll() {
        const regularizacoesSanitarias = await this.regularizacaoSanitariaRepository.getAll();
        return regularizacoesSanitarias;
    }
}
