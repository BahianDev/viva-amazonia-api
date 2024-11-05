import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRegularizacaoAmbientalDto } from './dto/create-regularizacao-ambiental.dto';
import { RegularizacaoAmbientalRepository } from './regularizacao-ambiental.repository';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class RegularizacaoAmbientalService {
  constructor(
    private readonly regularizacaoAmbientalRepository: RegularizacaoAmbientalRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async create(
    createRegularizacaoAmbientalDto: CreateRegularizacaoAmbientalDto,
    email: string,
  ) {
    const {
      possuiCar,
      carComp,
      possuiReservaLegal,
      reservaLegalRegularizada,
      reservaLegalRegularizadaComp,
      desejaRegReservaLegal,
      excedenteVegNatReservaLegal,
      comoCompensar,
    } = createRegularizacaoAmbientalDto;

    const user = await this.userRepository.get({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestException('Something went wrong!');
    }

    const alreadyExists = await this.regularizacaoAmbientalRepository.get({
      where: {
        userId: user.id,
      },
    });

    if (alreadyExists) {
      throw new BadRequestException('Something went wrong!');
    }

    const environmental = await this.regularizacaoAmbientalRepository.create({
      data: {
        userId: user.id,
        possuiCar,
        carComp,
        possuiReservaLegal,
        reservaLegalRegularizada,
        reservaLegalRegularizadaComp,
        desejaRegReservaLegal,
        excedenteVegNatReservaLegal,
        comoCompensar,
      },
    });
    return environmental;
  }

  async getAll() {
    const environmentals = await this.regularizacaoAmbientalRepository.getAll();
    return environmentals;
  }
}
