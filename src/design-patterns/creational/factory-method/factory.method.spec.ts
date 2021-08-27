import {
  Family,
  Free,
  Plan,
  PlanFactory,
  PlanInfo,
  Premium,
} from './factory.method';

describe('FactoryMethod', () => {
  describe('Free', () => {
    it('should return an instance of a Free plan', () => {
      expect(PlanFactory.generatePlan('FREE')).toBeInstanceOf(Free);
    });

    it('should return Free plan info', () => {
      const plan: Plan = PlanFactory.generatePlan('FREE');

      expect(plan).toBeDefined();
      expect(plan.planRate).toBe(0.0);
      expect(plan.planInfo).toEqual({
        maxConnections: 1,
        maxActive: 1,
        discount: 0,
      } as PlanInfo);
    });
  });

  describe('Family', () => {
    it('should return an instance of a Family plan', () => {
      expect(PlanFactory.generatePlan('FAMILY')).toBeInstanceOf(Family);
    });

    it('should return Family plan info', () => {
      const plan: Plan = PlanFactory.generatePlan('FAMILY');

      expect(plan).toBeDefined();
      expect(plan.planRate).toBe(10.0);
      expect(plan.planInfo).toEqual({
        maxConnections: 5,
        maxActive: 5,
        discount: 0,
      } as PlanInfo);
    });
  });

  describe('Premium', () => {
    it('should return an instance of a Premium plan', () => {
      expect(PlanFactory.generatePlan('PREMIUM')).toBeInstanceOf(Premium);
    });

    it('should return Premium plan info', () => {
      const plan: Plan = PlanFactory.generatePlan('PREMIUM');

      expect(plan).toBeDefined();
      expect(plan.planRate).toBe(15.0);
      expect(plan.planInfo).toEqual({
        maxConnections: 'unlimited',
        maxActive: 'unlimited',
        discount: 10.0,
      } as PlanInfo);
    });
  });
});
