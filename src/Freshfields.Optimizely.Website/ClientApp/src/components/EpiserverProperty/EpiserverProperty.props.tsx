import { EpiserverMode } from '@/types/EpiContent';

export default interface EpiserverProperty extends EpiserverMode {
    propertyName: string;
    debug?: boolean;
}
