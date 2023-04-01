import { describe, it, expect } from 'vitest'
import { beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create a new gym', async () => {
    const { gym } = await sut.execute({
      title:'Javascript Gym',
      description: null,
      phone: null,
      latitude: -25.1388578,
      longitude: -50.1590107,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})