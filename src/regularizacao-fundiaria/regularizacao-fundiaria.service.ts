import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegularizacaoFundiariaDto } from './dto/create-regularizacao-fundiaria.dto';
import { RegularizacaoFundiariaRepository } from './regularizacao-fundiaria.repository';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class RegularizacaoFundiariaService {
    constructor(
        private readonly regularizacaoFundiariaRepository: RegularizacaoFundiariaRepository,
        private readonly userRepository: UserRepository,
    ) { }

    async create(
        createRegularizacaoFundiariaDto: CreateRegularizacaoFundiariaDto,
        email: string,
    ) {
        const {
            possuiCafDap,
            cafDapComp,
            possuiSigef,
            sigefComp,
            registCartorioLote,
            possuiBaseTopoSigef,
            encontrouProfParaLevantamento,
            localizacao,
            ccirNoSncrDoIncra,
            ccirNoSncrDoIncraComp
        } = createRegularizacaoFundiariaDto;

        const user = await this.userRepository.get({
            where: {
                email,
            },
        });

        if (!user) {
            throw new BadRequestException('Something went wrong!');
        }

        const alreadyExists = await this.regularizacaoFundiariaRepository.get({
            where: {
                userId: user.id,
            },
        });

        if (alreadyExists) {
            throw new BadRequestException('Something went wrong!');
        }

        const fundiaria = await this.regularizacaoFundiariaRepository.create({
            data: {
                userId: user.id,
                possuiCafDap,
                cafDapComp,
                possuiSigef,
                sigefComp,
                registCartorioLote,
                possuiBaseTopoSigef,
                encontrouProfParaLevantamento,
                localizacao,
                ccirNoSncrDoIncra,
                ccirNoSncrDoIncraComp
            },
        });
        return fundiaria;
    }

    async getAll() {
        const fundiarias = await this.regularizacaoFundiariaRepository.getAll();
        return fundiarias;
    }
}
