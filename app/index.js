import { format } from 'date-fns';

const DATE_FORMAT = 'MMM do yyyy';

export const formatDate = (date) => (
  format(new Date(date), DATE_FORMAT)
);

export const REVALIDATE_INTERVAL = 60 * 60;
