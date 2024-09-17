// Importação das bibliotecas
import venom from 'venom-bot';
import mongoose from 'mongoose';
import moment from 'moment';
import nodeCron from 'node-cron';
import Joi from 'joi';
import { Server as socketIo } from 'socket.io'; // A importação padrão para socket.io é um named export
import winston from 'winston';
import qrcode from 'qrcode';
import { v4 as uuidv4 } from 'uuid'; // Importa a função v4 como uuidv4
import Telegraf from 'telegraf';
import puppeteer from 'puppeteer';
import { RateLimiterMemory as rateLimiterFlexible } from 'rate-limiter-flexible'; // Importa a classe RateLimiterMemory como rateLimiterFlexible
import lodash from 'lodash';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Criação do objeto para exportação
const importLib = {
  venom,
  mongoose,
  moment,
  nodeCron,
  joi: Joi,
  socketIo,
  winston,
  qrcode,
  uuid: uuidv4,
  telegraf: Telegraf,
  puppeteer,
  rateLimiterFlexible,
  lodash,
  sharp,
  path,
  fs
};

// Exportação do objeto
export default importLib;
