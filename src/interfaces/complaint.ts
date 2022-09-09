interface Company {
  name: string;
}

export interface IComplaint {
  complaintId: string;
  complaint: string;
  company: Company;
  source: string;
  type: string;
}

export interface IComplaintTableRowProps extends IComplaint {
  rowNumber?: number;
}

export interface IComplaintTableProps {
  complaints: IComplaint[];
}
