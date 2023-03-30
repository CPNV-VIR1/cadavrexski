/**
 * @file      phrase.test.js
 * @brief     This class is designed to test the behaviour of the phrase controller.
 * @author    Created by Menoud Yann
 * @version   30-03-2023 - original (dedicated to RIA1)
 * @version   30-03-2023 - update
 */

const request = require('supertest')
const { app } = require('../app')

test("test the root path", async () => {
    const response = await request(app).get("/api/v1/phrases")
    expect(response.statusCode).toBe(200)
  });