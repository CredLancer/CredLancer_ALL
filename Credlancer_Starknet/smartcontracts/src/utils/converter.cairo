%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256
from starkware.cairo.common.math import slipt_felt
// Transforms a felt into Uint256
func felt_to_uint{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(value: felt)
-> Uint256 {
    let (high, low) = slipt_felt(value);
    tempvar res: Uint256;
    res.high = high;
    res.low = low;

    return res;
}