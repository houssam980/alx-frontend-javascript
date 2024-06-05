const createInt8TypedArray = (length, position, value) => {
    const bfr = new ArrayBuffer(length);
    const int_arr = new Int8Array(bfr);
    if (position > int_arr.length) throw new Error('Position outside range');
    int_arr[position] = value;
    return new DataView(bfr);
};

export default createInt8TypedArray;
