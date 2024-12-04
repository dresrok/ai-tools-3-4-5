class InsuranceService {
  calculatePrice({ age, membershipYears }) {
    const basePrice =
      age <= InsuranceService.TEENAGE_MAX_AGE
        ? InsuranceService.TEENAGE_BASE_PRICE
        : age <= InsuranceService.ADULT_MAX_AGE
        ? InsuranceService.ADULT_BASE_PRICE
        : InsuranceService.ELDERLY_BASE_PRICE;
    const discountedRate = Math.pow(
      1 - InsuranceService.ANNUAL_DISCOUNT_RATE,
      membershipYears
    );

    return Math.round(basePrice * discountedRate);
  }
}

InsuranceService.TEENAGE_BASE_PRICE = 300;
InsuranceService.ADULT_BASE_PRICE = 700;
InsuranceService.ELDERLY_BASE_PRICE = 1100;

InsuranceService.TEENAGE_MAX_AGE = 19;
InsuranceService.ADULT_MAX_AGE = 55;

InsuranceService.ANNUAL_DISCOUNT_RATE = 0.1;

module.exports = { InsuranceService };
