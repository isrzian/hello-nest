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
  getOne(@Param("id") movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return this.moviesService.remove(movieId);
  }

  @Patch("/:id")
  patch(@Param("id") movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData
    };
  }
}
