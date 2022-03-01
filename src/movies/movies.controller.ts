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

@Controller("movies")
export class MoviesController {

  @Get()
  getAll(): string {
    return "all films";
  }

  @Get("search")
  search(@Query('year') year: string) {
    return `I search movie realised after ${year} year`;
  }

  @Get("/:id")
  getOne(@Param("id") movieId: string): string {
    return `${movieId} film`;
  }

  @Post()
  create(@Body() movieData): string {
    return movieData;
  }

  @Delete("/:id")
  remove(@Param("id") movieId: string): string {
    return `delete film ${movieId}`;
  }

  @Patch("/:id")
  patch(@Param("id") movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData
    };
  }
}
