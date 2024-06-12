const classNames = (arr: (string | undefined | null)[]) =>
    arr.filter(Boolean).join(' ');

export default classNames;
