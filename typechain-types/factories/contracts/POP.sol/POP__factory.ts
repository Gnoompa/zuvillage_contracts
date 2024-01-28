/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { POP, POPInterface } from "../../../contracts/POP.sol/POP";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_permit",
        type: "address",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_village",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "villageId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "permitId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "villageId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "permitId",
        type: "uint256",
      },
    ],
    name: "getClaimable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintRatePerDay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052670de0b6b3a76400006007553480156200001d57600080fd5b5060405162002952380380620029528339818101604052810190620000439190620002a0565b6040518060400160405280601781526020017f50726f6f664f66506f6c6c696e6174696f6e546f6b656e0000000000000000008152506040518060400160405280600381526020017f504f5000000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000c7929190620001d3565b508060049080519060200190620000e0929190620001d3565b506012600560006101000a81548160ff021916908360ff1602179055505050600160068190555082600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000344565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200020b576000855562000257565b82601f106200022657805160ff191683800117855562000257565b8280016001018555821562000257579182015b828111156200025657825182559160200191906001019062000239565b5b5090506200026691906200026a565b5090565b5b80821115620002855760008160009055506001016200026b565b5090565b6000815190506200029a816200032a565b92915050565b600080600060608486031215620002b657600080fd5b6000620002c68682870162000289565b9350506020620002d98682870162000289565b9250506040620002ec8682870162000289565b9150509250925092565b600062000303826200030a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200033581620002f6565b81146200034157600080fd5b50565b6125fe80620003546000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063796ac0f01161008c578063a9059cbb11610066578063a9059cbb14610287578063ade8540c146102b7578063dd62ed3e146102d5578063efa9a9be14610305576100ea565b8063796ac0f01461020957806395d89b4114610239578063a457c2d714610257576100ea565b806323b872dd116100c857806323b872dd1461015b578063313ce5671461018b57806339509351146101a957806370a08231146101d9576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461013d575b600080fd5b6100f7610321565b60405161010491906121f5565b60405180910390f35b61012760048036038101906101229190611edc565b6103c3565b60405161013491906121da565b60405180910390f35b6101456103e1565b6040516101529190612277565b60405180910390f35b61017560048036038101906101709190611e8d565b6103eb565b60405161018291906121da565b60405180910390f35b610193610577565b6040516101a09190612292565b60405180910390f35b6101c360048036038101906101be9190611edc565b61058e565b6040516101d091906121da565b60405180910390f35b6101f360048036038101906101ee9190611dff565b610641565b6040516102009190612277565b60405180910390f35b610223600480360381019061021e9190611f82565b610689565b6040516102309190612277565b60405180910390f35b610241610a02565b60405161024e91906121f5565b60405180910390f35b610271600480360381019061026c9190611edc565b610aa4565b60405161027e91906121da565b60405180910390f35b6102a1600480360381019061029c9190611edc565b610b71565b6040516102ae91906121da565b60405180910390f35b6102bf610b8f565b6040516102cc9190612277565b60405180910390f35b6102ef60048036038101906102ea9190611e51565b610b95565b6040516102fc9190612277565b60405180910390f35b61031f600480360381019061031a9190611fbe565b610c1c565b005b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b5050505050905090565b60006103d76103d0610e80565b8484610e88565b6001905092915050565b6000600254905090565b6000610404846064600f8502816103fe57fe5b0461107f565b6104bb84600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634162169f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561047057600080fd5b505afa158015610484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a89190611e28565b6064600f8602816104b557fe5b04611243565b5081600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061056e84846064604686028161056857fe5b04611243565b90509392505050565b6000600560009054906101000a900460ff16905090565b600061063761059b610e80565b8461063285600160006105ac610e80565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461131c90919063ffffffff16565b610e88565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600080600167ffffffffffffffff811180156106a457600080fd5b506040519080825280602002602001820160405280156106d35781602001602082028036833780820191505090505b50905083816000815181106106e457fe5b60200260200101818152505042600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166312def0c5836040518263ffffffff1660e01b815260040161074c91906121b8565b60006040518083038186803b15801561076457600080fd5b505afa158015610778573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906107a19190611f18565b6000815181106107ad57fe5b6020026020010151606001516000815181106107c557fe5b602002602001015111156109f657600c600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205462015180600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166312def0c5846040518263ffffffff1660e01b815260040161088391906121b8565b60006040518083038186803b15801561089b57600080fd5b505afa1580156108af573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906108d89190611f18565b6000815181106108e457fe5b6020026020010151606001516000815181106108fc57fe5b6020026020010151600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166312def0c5856040518263ffffffff1660e01b815260040161095f91906121b8565b60006040518083038186803b15801561097757600080fd5b505afa15801561098b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109b49190611f18565b6000815181106109c057fe5b6020026020010151606001516001815181106109d857fe5b60200260200101510360075402816109ec57fe5b04039150506109fc565b60009150505b92915050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a9a5780601f10610a6f57610100808354040283529160200191610a9a565b820191906000526020600020905b815481529060010190602001808311610a7d57829003601f168201915b5050505050905090565b6000610b67610ab1610e80565b84610b62856040518060600160405280602581526020016125a46025913960016000610adb610e80565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113a49092919063ffffffff16565b610e88565b6001905092915050565b6000610b85610b7e610e80565b848461145e565b6001905092915050565b60075481565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60026006541415610c95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6002600681905550610ca7838361171f565b3373ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610d199190612277565b60206040518083038186803b158015610d3157600080fd5b505afa158015610d45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d699190611e28565b73ffffffffffffffffffffffffffffffffffffffff1614610dbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db690612217565b60405180910390fd5b80610dca8484610689565b1015610e0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0290612237565b60405180910390fd5b80600c600084815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550610e73338261180f565b6001600681905550505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f0e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806125806024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f94576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124ca6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611105576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061253a6021913960400191505060405180910390fd5b611111826000836119d6565b61117c816040518060600160405280602281526020016124a8602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113a49092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111d3816002546119db90919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600061125084848461145e565b6113118461125c610e80565b61130c8560405180606001604052806028815260200161251260289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006112c2610e80565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113a49092919063ffffffff16565b610e88565b600190509392505050565b60008082840190508381101561139a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290611451576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156114165780820151818401526020810190506113fb565b50505050905090810190601f1680156114435780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156114e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061255b6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561156a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124856023913960400191505060405180910390fd5b6115758383836119d6565b6115e0816040518060600160405280602681526020016124ec602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113a49092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611673816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461131c90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b81600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663daa826cc836040518263ffffffff1660e01b815260040161177b9190612277565b60206040518083038186803b15801561179357600080fd5b505afa1580156117a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cb9190611f59565b1461180b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180290612257565b60405180910390fd5b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6118be600083836119d6565b6118d38160025461131c90919063ffffffff16565b60028190555061192a816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461131c90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b505050565b600082821115611a53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b6000611a71611a6c846122de565b6122ad565b9050808382526020820190508260005b85811015611ab15781518501611a978882611c0d565b845260208401935060208301925050600181019050611a81565b5050509392505050565b6000611ace611ac98461230a565b6122ad565b90508083825260208201905082856020860282011115611aed57600080fd5b60005b85811015611b1d5781611b038882611dea565b845260208401935060208301925050600181019050611af0565b5050509392505050565b6000611b3a611b3584612336565b6122ad565b905082815260208101848484011115611b5257600080fd5b611b5d848285612410565b509392505050565b600081359050611b7481612456565b92915050565b600081519050611b8981612456565b92915050565b600082601f830112611ba057600080fd5b8151611bb0848260208601611a5e565b91505092915050565b600082601f830112611bca57600080fd5b8151611bda848260208601611abb565b91505092915050565b600082601f830112611bf457600080fd5b8151611c04848260208601611b27565b91505092915050565b60006101608284031215611c2057600080fd5b611c2b6101606122ad565b90506000611c3b84828501611b7a565b600083015250602082015167ffffffffffffffff811115611c5b57600080fd5b611c6784828501611be3565b602083015250604082015167ffffffffffffffff811115611c8757600080fd5b611c9384828501611bb9565b604083015250606082015167ffffffffffffffff811115611cb357600080fd5b611cbf84828501611bb9565b606083015250608082015167ffffffffffffffff811115611cdf57600080fd5b611ceb84828501611be3565b60808301525060a082015167ffffffffffffffff811115611d0b57600080fd5b611d1784828501611be3565b60a08301525060c082015167ffffffffffffffff811115611d3757600080fd5b611d4384828501611be3565b60c08301525060e082015167ffffffffffffffff811115611d6357600080fd5b611d6f84828501611be3565b60e08301525061010082015167ffffffffffffffff811115611d9057600080fd5b611d9c84828501611be3565b61010083015250610120611db284828501611dea565b61012083015250610140611dc884828501611dea565b6101408301525092915050565b600081359050611de48161246d565b92915050565b600081519050611df98161246d565b92915050565b600060208284031215611e1157600080fd5b6000611e1f84828501611b65565b91505092915050565b600060208284031215611e3a57600080fd5b6000611e4884828501611b7a565b91505092915050565b60008060408385031215611e6457600080fd5b6000611e7285828601611b65565b9250506020611e8385828601611b65565b9150509250929050565b600080600060608486031215611ea257600080fd5b6000611eb086828701611b65565b9350506020611ec186828701611b65565b9250506040611ed286828701611dd5565b9150509250925092565b60008060408385031215611eef57600080fd5b6000611efd85828601611b65565b9250506020611f0e85828601611dd5565b9150509250929050565b600060208284031215611f2a57600080fd5b600082015167ffffffffffffffff811115611f4457600080fd5b611f5084828501611b8f565b91505092915050565b600060208284031215611f6b57600080fd5b6000611f7984828501611dea565b91505092915050565b60008060408385031215611f9557600080fd5b6000611fa385828601611dd5565b9250506020611fb485828601611dd5565b9150509250929050565b600080600060608486031215611fd357600080fd5b6000611fe186828701611dd5565b9350506020611ff286828701611dd5565b925050604061200386828701611dd5565b9150509250925092565b6000612019838361218b565b60208301905092915050565b600061203082612376565b61203a8185612399565b935061204583612366565b8060005b8381101561207657815161205d888261200d565b97506120688361238c565b925050600181019050612049565b5085935050505092915050565b61208c816123cd565b82525050565b600061209d82612381565b6120a781856123aa565b93506120b7818560208601612410565b6120c081612445565b840191505092915050565b60006120d86010836123aa565b91507f4e6f74207065726d6974206f776e6572000000000000000000000000000000006000830152602082019050919050565b6000612118600e836123aa565b91507f496e76616c696420616d6f756e740000000000000000000000000000000000006000830152602082019050919050565b6000612158600c836123aa565b91507f57726f6e67207065726d697400000000000000000000000000000000000000006000830152602082019050919050565b612194816123f9565b82525050565b6121a3816123f9565b82525050565b6121b281612403565b82525050565b600060208201905081810360008301526121d28184612025565b905092915050565b60006020820190506121ef6000830184612083565b92915050565b6000602082019050818103600083015261220f8184612092565b905092915050565b60006020820190508181036000830152612230816120cb565b9050919050565b600060208201905081810360008301526122508161210b565b9050919050565b600060208201905081810360008301526122708161214b565b9050919050565b600060208201905061228c600083018461219a565b92915050565b60006020820190506122a760008301846121a9565b92915050565b6000604051905081810181811067ffffffffffffffff821117156122d4576122d3612443565b5b8060405250919050565b600067ffffffffffffffff8211156122f9576122f8612443565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561232557612324612443565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561235157612350612443565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123c6826123d9565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561242e578082015181840152602081019050612413565b8381111561243d576000848401525b50505050565bfe5b6000601f19601f8301169050919050565b61245f816123bb565b811461246a57600080fd5b50565b612476816123f9565b811461248157600080fd5b5056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220b1e1874e7d7ad1239657cdc8ff6e63c7c666e5bef1ca3cf8bcc5bb48f338d26264736f6c63430007060033";

type POPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: POPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class POP__factory extends ContractFactory {
  constructor(...args: POPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _permit: AddressLike,
    _manager: AddressLike,
    _village: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _permit,
      _manager,
      _village,
      overrides || {}
    );
  }
  override deploy(
    _permit: AddressLike,
    _manager: AddressLike,
    _village: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _permit,
      _manager,
      _village,
      overrides || {}
    ) as Promise<
      POP & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): POP__factory {
    return super.connect(runner) as POP__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): POPInterface {
    return new Interface(_abi) as POPInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): POP {
    return new Contract(address, _abi, runner) as unknown as POP;
  }
}
