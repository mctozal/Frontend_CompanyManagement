//this file is for static data that rarely change and doesn't require backend configuration.
export const PMFrequencyList = [
{ name: 'Daily', value: 'daily' },
{ name: 'Weekly', value: 'weekly' },
{ name: 'Monthly', value: 'monthly' },
{ name: 'Quarterly', value: 'quarterly' },
{ name: 'Semi-Annual', value: 'semi-annual' },
{ name: 'Annual', value: 'annual' }
 ];
export const BillingType=[
 {name: 'Invoice per visit', value: 'invoice per visit' },
  { name: 'Invoice per client', value: 'invoice per client' }
];
export interface Contract {
  id: number;
  contractReference: string;
  client: string;
  jobType: string;
  jobSubType: string;
  status: string;
  expiryDate: string;
  nextVisitDate: string;
}

export const ContractMockList: Contract[] = [
  {
    id: 1,
    contractReference: "100",
    client: "client1",
    jobType: "Plumber",
    jobSubType: "sub1",
    status: "assigned",
    expiryDate: "10/10/2010",
    nextVisitDate: "15/10/2010",
  },
  {
    id: 2,
    contractReference: "200",
    client: "client2",
    jobType: "maintenance",
    jobSubType: "sub2",
    status: "completed",
    expiryDate: "10/10/2020",
    nextVisitDate: "20/10/2020",
  },
];