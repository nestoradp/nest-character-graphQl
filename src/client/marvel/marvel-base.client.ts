import { Injectable } from '@nestjs/common';
import axios from 'axios';
import fetch from 'node-fetch';
@Injectable()
export abstract class MarvelBaseClient {
  private readonly _apiUrl: string;
  private readonly _apiKey: string;
  private readonly _hash: string;
  private readonly _ts: string;

  public constructor() {
    this._apiUrl = process.env.API_URL;
    this._apiKey = `apikey=${process.env.API_KEY}&`;
    this._ts = `ts=${process.env.TS}&`;
    this._hash = `hash=${process.env.HASH}`;
  }

  protected async get(url: string) {
    return await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=835bb2306bff2775290ba8ea8d6fe0cd&hash=8820100bd043e1eb7877f9f16d804a31`,
    );
  }

  protected async post(url: string, payload: unknown) {
    return axios.post(
      this._apiUrl + url + this._ts + this._apiKey + this._hash,
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
