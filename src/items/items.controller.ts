import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
//import Joi from 'joi';
import * as Joi from 'joi';
import validator from 'src/validator';

let count = 0;

type User = {
  name: String;
  id: Number;
};

const schema = Joi.object().options({ abortEarly: false }).keys({
  email: Joi.string().email().required(),
  //birthday: Joi.date().max('1-1-2004').iso(),
});

const users: User[] = [];
@Controller('items')
export class ItemsController {
  @Post()
  create(@Body() body: any): String {
    const validation = schema.validate(body);
    if (validation.error) {
      const errorMessages = validator(validation.error.details);
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: errorMessages,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const responseMessage = `User created`;
    return responseMessage;
  }

  @Get()
  findAll(@Req() request: Request): any {
    const { path, url } = request;
    const date = new Date();
    count = count + 1;
    const info = `You have request ${count} times`;
    return {
      path,
      url,
      date,
      info,
    };
    //   return 'GET ALL ITEMS';
  }
}
