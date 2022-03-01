import {
  Controller,
  Param,
  Get,
  Post,
  Patch,
  Delete,
} from "@nestjs/common";

@Controller('movies')
export class MoviesController {

  @Get()
  getAll(): string {
    return "all films"
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): string {
    return `${movieId} film`
  }

  @Post()
  create(): string {
    return "create new film"
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string): string {
    return `delete film ${movieId}`
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string): string {
    return `patch ${movieId} film`
  }
}
