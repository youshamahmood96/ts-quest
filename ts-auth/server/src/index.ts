import express from 'express';
import mongoose from 'mongoose';
import dbConnect from './dbConnect'
import * as dotenv from 'dotenv';
import path from 'path';
import main from './main';

dotenv.config({
    path:path.resolve(__dirname, '../.env')
})

main()
