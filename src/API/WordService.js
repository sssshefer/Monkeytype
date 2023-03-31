import React from 'react';
import axios from "axios";

export default class WordService {

    static async getRandomWords(limit = 50) {
        const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${limit}`)
        return response;
    }
}