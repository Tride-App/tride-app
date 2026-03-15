import { describe, expect, it } from 'vitest'
import {
    trideHealthHref,
    trideHighlights,
    tridePrinciples,
    trideRoutes,
    trideSteps,
} from '../src/app/content'

describe('Tride landing content', () => {
    it('defines the launch routes and trust principles', () => {
        expect(trideRoutes).toContain('Kaduna to Abuja')
        expect(trideHighlights).toHaveLength(3)
        expect(tridePrinciples).toHaveLength(3)
    })

    it('keeps the hero call-to-action pointed at the API health endpoint', () => {
        expect(trideHealthHref).toBe('http://localhost:3000/api/health')
    })

    it('keeps the product walkthrough in sequence', () => {
        expect(trideSteps.map((step) => step.label)).toEqual(['01', '02', '03'])
    })
})