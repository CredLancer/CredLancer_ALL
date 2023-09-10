%lang starknet

from starkware.cairo.common.alloc import alloc
from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.cairo.common.uint256 import Uint256

from src.token.erc1155.library import ERC1155
from src.utils.short_string import uint256_to_ss, felt_to_ss
from src.utils.converter import felt_to_uint
from src.utils.array import concat_arr

//
// Storage
//

@storage_var
func ERC1155_base_tokenURI(index: felt) -> (res: felt) {
}

@storage_var
func ERC1155_base_tokenURI_len() -> (res: felt) {
}

@storage_var
func ERC1155_contract_URI(index: felt) -> (res: felt) {
}

@storage_var
func ERC1155_contract_URI_len() -> (res: felt) {
}

// CONTRACT

func ERC1155_contractURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (contract_URI_len: felt, contractURI: felt*) {
    alloc_locals;
    // Return tokenURI with an array of felts, `${base_tokenURI}/${token_id}`
    let (local base_contractURI) = alloc();
    let (local base_contractURI_len) = ERC1155_contract_URI_len.read();
    _ERC1155_contractURI(base_contractURI_len, base_contractURI);
    return (contract_URI_len=base_contractURI_len, contractURI=base_contractURI);
}

func _ERC1155_contractURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    base_contractURI_len: felt, base_contractURI: felt*
) {
    if (base_contractURI_len == 0) {
        return ();
    }
    let (base) = ERC1155_contract_URI.read(base_contractURI_len);
    assert [base_contractURI] = base;
    _ERC1155_contractURI(base_contractURI_len=base_contractURI_len - 1, base_contractURI=base_contractURI + 1);
    return ();
}

func ERC1155_setContractURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    contractURI_len: felt, contractURI: felt*
) {
    _ERC1155_setContractURI(contractURI_len, contractURI);
    ERC1155_contract_URI_len.write(contractURI_len);
    return ();
}

func _ERC1155_setContractURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    contractURI_len: felt, contractURI: felt*
) {
    if (contractURI_len == 0) {
        return ();
    }
    ERC1155_contract_URI.write(index=contractURI_len, value=[contractURI]);
    _ERC1155_setContractURI(contractURI_len=contractURI_len - 1, contractURI=contractURI + 1);
    return ();
}

// TOKEN

func ERC1155_tokenURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    token_id: Uint256
) -> (tokenURI_len: felt, tokenURI: felt*) {
    alloc_locals;

    // Return tokenURI with an array of felts, `${base_tokenURI}/${token_id}`
    let (local base_tokenURI) = alloc();
    let (local base_tokenURI_len) = ERC1155_base_tokenURI_len.read();
    _ERC1155_baseTokenURI(base_tokenURI_len, base_tokenURI);
    let (token_id_ss_len, token_id_ss) = uint256_to_ss(token_id);
    let (tokenURI, tokenURI_len) = concat_arr(
        base_tokenURI_len, base_tokenURI, token_id_ss_len, token_id_ss
    );

    return (tokenURI_len=tokenURI_len, tokenURI=tokenURI);
}

func _ERC1155_baseTokenURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    base_tokenURI_len: felt, base_tokenURI: felt*
) {
    if (base_tokenURI_len == 0) {
        return ();
    }
    let (base) = ERC1155_base_tokenURI.read(base_tokenURI_len);
    assert [base_tokenURI] = base;
    _ERC1155_baseTokenURI(base_tokenURI_len=base_tokenURI_len - 1, base_tokenURI=base_tokenURI + 1);
    return ();
}

func ERC1155_setBaseTokenURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    tokenURI_len: felt, tokenURI: felt*
) {
    _ERC1155_setBaseTokenURI(tokenURI_len, tokenURI);
    ERC1155_base_tokenURI_len.write(tokenURI_len);
    return ();
}

func _ERC1155_setBaseTokenURI{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    tokenURI_len: felt, tokenURI: felt*
) {
    if (tokenURI_len == 0) {
        return ();
    }
    ERC1155_base_tokenURI.write(index=tokenURI_len, value=[tokenURI]);
    _ERC1155_setBaseTokenURI(tokenURI_len=tokenURI_len - 1, tokenURI=tokenURI + 1);
    return ();
}