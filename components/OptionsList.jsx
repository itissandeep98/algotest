export const PositionTypeData = [
  { value: 'SELL', label: 'Sell' },
  { value: 'BUY', label: 'Buy' }
];

export const OptionCallData = [
  { value: 'CALL', label: 'Call' },
  { value: 'PUT', label: 'Put' }
];

export const ExpiryKindData = [
  { value: 'WEEKLY', label: 'Weekly' },
  { value: 'MONTHLY', label: 'Monthly' }
];

export const StrikeCriteriaData = [
  { value: 'EntryByStrikeType', label: 'Strike Type' },
  { value: 'EntryByPremiumRange', label: 'Premium Range' },
  { value: 'EntryByPremium', label: 'Closest Premium' },
  { value: 'EntryByStraddleWidth', label: 'Straddle width' }
];

export const StrikeTypeData = [
  { value: 'ATM', label: 'ATM' },
  { value: 'ITM', label: 'ITM' },
  { value: 'OTM', label: 'OTM' }
];

export const AdjustmentData = [
  { value: 'Plus', label: '+' },
  { value: 'Minus', label: '-' }
];

export const MomentumData = [
  { value: 'PointsUp', label: 'Points Up' },
  { value: 'PointsDown', label: 'Points Down' },
  { value: 'PercentageUp', label: 'Percentage Up' },
  { value: 'PercentageDown', label: 'Percentage Down' },
  { value: 'UnderlyingPointsUp', label: 'Underlying Points Up' },
  { value: 'UnderlyingPointsDown', label: 'Underlying Points Down' },
  { value: 'UnderlyingPercentageUp', label: 'Underlying Percentage Up' },
  { value: 'UnderlyingPercentageDown', label: 'Underlying Percentage Down' }
];

export const TargetData = [
  { value: 'Points', label: 'Points' },
  { value: 'Percentage', label: 'Percentage' },
  { value: 'UnderlyingPoints', label: 'Underlying Points' },
  { value: 'UnderlyingPercentage', label: 'Underlying Percentage' }
];

export const SLData = [
  { value: 'Points', label: 'Points' },
  { value: 'Percentage', label: 'Percentage' }
];

export const ReentryData = [
  { value: 'ASAP', label: 'RE ASAP' },
  { value: 'ASAPReverse', label: 'RE ASAP BACK' },
  { value: 'MOMENTUM', label: 'RE MOMENTUM' },
  { value: 'MOMENTUMReverse', label: 'RE MOMENTUM BACK' },
  { value: 'COST', label: 'RE COST' },
  { value: 'COSTReverse', label: 'RE COST BACK' }
];
