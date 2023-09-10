%lang starknet

from starkware.cairo.common.registers import get_label_location
from starkware.cairo.common.alloc import alloc

struct Credential {
    title: felt,    //degree for example
    issued_by: felt, 
    skills: felt,
    date_of_issue: felt,
    id: felt, //do not display it on the cards
}

struct QuestPending { // Opportunity available
    title: felt, 
    task: felt,
    id: felt, //do not display it on the cards
}

struct QuestCompleted { // Quest once completed
    title: felt, //same as QuestPending title (coordinate titles)
    issued_by: felt, 
    skills: felt, 
    date_of_issue: felt,
    id: felt, //do not display it on the cards 
}

func lookup_Credential(index: felt) -> Credential* {
    let (addr) = get_label_location(data_start);
    return cast(addr + ((index - 1) * 5), Credential*);

    data_start:
    dw 'Dev Web3';
    dw 'Starknet';
    dw 'Cairo smartscontracts';
    dw '02/2023';
    dw '1';

    dw 'BA';
    dw 'The university of Chicago';
    dw 'BA with major in Economic and minor in computer science';
    dw '01/2006';
    dw '2';
    // above just an example, 
    // you can create a large number of them manually
    // it is important to specify an id for them, in ascending order such that id = n, 
    // with a step of n + 1 for n = 1 at first id.
}

func lookup_QuestPending(index: felt) -> QuestPending* {
    let (addr) = get_label_location(data_start);
    return cast(addr + ((index - 1) * 3), QuestPending*);

    data_start:
    dw 'Dev web3';
    dw 'Full stack';
    dw '1';
    // above just an example, 
    // you can create a large number of them manually
    // it is important to specify an id for them, in ascending order such that id = n, 
    // with a step of n + 1 for n = 1 at first id.
}

func lookup_QuestCompleted(inex; felt) -> QuestCompleted* {
    let (addr) = get_label_location(data_start);
    return cast(addr + ((index - 1) * 5), QuestCompleted*);

    data_start:
    dw 'Dev zeb3';
    dw 'Ledger';
    dw 'SC';
    dw '02/2023';
    dw '1';
    // above just an example, 
    // you can create a large number of them manually
    // it is important to specify an id for them, in ascending order such that id = n, 
    // with a step of n + 1 for n = 1 at first id.
}