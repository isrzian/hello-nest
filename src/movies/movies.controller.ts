import {
  Controller,
  Param,
  Body,
  Query,
  Get,
  Post,
  Patch,
  Delete
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";

@Controller("movies")
export class MoviesController {

  constructor(private readonly moviesService: MoviesService) {
  }

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  /*@Get("search")
  search(@Query("year") year: string) {
    return `I search movie realised after ${year} year`;
  }*/

  @Get("/:id")
  getOne(@Param("id") movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") movieId: number) {
    return this.moviesService.remove(movieId);
  }

  @Patch("/:id")
  patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.patch(movieId, updateData);
  }
}
