import {
  object,
  string,
  array,
  enum as zEnum
} from 'zod'
import {
  apiSchemaErros
} from '@setup/errorSchema'

const {
  apparition_episodes,
  armors
} = apiSchemaErros

export const apiSchema = object({
  armors: array(object({
    apparition_episodes: string({
      invalid_type_error: apparition_episodes.invalid_type_error,
      required_error: apparition_episodes.required_error
    }),
    enchantments: array(object({
      id: string({
        invalid_type_error: '',
        required_error: ''
      }),
      lvl: zEnum(['1', '2', '3', '4', '5'] || ['I', 'II', 'III', 'IV', 'V'], {
        invalid_type_error: '',
        required_error: ''
      })
    })).optional(),
    material: string({
      invalid_type_error: '',
      required_error: ''
    }).optional(),
    name_tool: string({
      invalid_type_error: '',
      required_error: ''
    }),
    others: string({
      invalid_type_error: '',
      required_error: ''
    }).optional(),
    use_of_tool: string({
      invalid_type_error: '',
      required_error: ''
    }).optional(),
    version: zEnum([
      '1.X',
      '1.4',
      '1.5',
      '1.6',
      '1.7',
      '1.8',
      '1.9',
      '1.10',
      '1.11',
      '1.12',
      '1.13',
      '1.14',
      '1.15',
      '1.16',
      '1.17',
      '1.18',
      '1.19',
      '1.20'
    ])
  }), {
    invalid_type_error: '',
    required_error: ''
  }),
  items: zEnum([''], {
    invalid_type_error: '',
    required_error: ''
  }),
  tools: object({
    shovels: array(object({
      apparition_episodes: string({
        invalid_type_error: '',
        required_error: ''
      }),
      enchantments: array(object({
        id: string({
          invalid_type_error: '',
          required_error: ''
        }),
        lvl: zEnum(['1', '2', '3', '4', '5'] || ['I', 'II', 'III', 'IV', 'V'], {
          invalid_type_error: '',
          required_error: ''
        })
      })).optional(),
      material: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      name_tool: string({
        invalid_type_error: '',
        required_error: ''
      }),
      others: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      use_of_tool: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      version: zEnum([
        '1.X',
        '1.4',
        '1.5',
        '1.6',
        '1.7',
        '1.8',
        '1.9',
        '1.10',
        '1.11',
        '1.12',
        '1.13',
        '1.14',
        '1.15',
        '1.16',
        '1.17',
        '1.18',
        '1.19',
        '1.20'
      ])
    }), {
      invalid_type_error: '',
      required_error: ''
    }),
    hoes: array(object({
      apparition_episodes: string({
        invalid_type_error: '',
        required_error: ''
      }),
      enchantments: array(object({
        id: string({
          invalid_type_error: '',
          required_error: ''
        }),
        lvl: zEnum(['1', '2', '3', '4', '5'] || ['I', 'II', 'III', 'IV', 'V'], {
          invalid_type_error: '',
          required_error: ''
        })
      })).optional(),
      material: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      name_tool: string({
        invalid_type_error: '',
        required_error: ''
      }),
      others: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      use_of_tool: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      version: zEnum([
        '1.X',
        '1.4',
        '1.5',
        '1.6',
        '1.7',
        '1.8',
        '1.9',
        '1.10',
        '1.11',
        '1.12',
        '1.13',
        '1.14',
        '1.15',
        '1.16',
        '1.17',
        '1.18',
        '1.19',
        '1.20'
      ])
    }), {
      invalid_type_error: '',
      required_error: ''
    }),
    axe: array(object({
      apparition_episodes: string({
        invalid_type_error: '',
        required_error: ''
      }),
      enchantments: array(object({
        id: string({
          invalid_type_error: '',
          required_error: ''
        }),
        lvl: zEnum(['1', '2', '3', '4', '5'] || ['I', 'II', 'III', 'IV', 'V'], {
          invalid_type_error: '',
          required_error: ''
        })
      })).optional(),
      material: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      name_tool: string({
        invalid_type_error: '',
        required_error: ''
      }),
      others: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      use_of_tool: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      version: zEnum([
        '1.X',
        '1.4',
        '1.5',
        '1.6',
        '1.7',
        '1.8',
        '1.9',
        '1.10',
        '1.11',
        '1.12',
        '1.13',
        '1.14',
        '1.15',
        '1.16',
        '1.17',
        '1.18',
        '1.19',
        '1.20'
      ])
    }), {
      invalid_type_error: '',
      required_error: ''
    }),
    pickaxe: array(object({
      apparition_episodes: string({
        invalid_type_error: '',
        required_error: ''
      }),
      enchantments: array(object({
        id: string({
          invalid_type_error: '',
          required_error: ''
        }),
        lvl: zEnum(['1', '2', '3', '4', '5'] || ['I', 'II', 'III', 'IV', 'V'], {
          invalid_type_error: '',
          required_error: ''
        })
      })).optional(),
      material: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      name_tool: string({
        invalid_type_error: '',
        required_error: ''
      }),
      others: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      use_of_tool: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      version: zEnum([
        '1.X',
        '1.4',
        '1.5',
        '1.6',
        '1.7',
        '1.8',
        '1.9',
        '1.10',
        '1.11',
        '1.12',
        '1.13',
        '1.14',
        '1.15',
        '1.16',
        '1.17',
        '1.18',
        '1.19',
        '1.20'
      ])
    }), {
      invalid_type_error: '',
      required_error: ''
    }),
    shears: array(object({
      apparition_episodes: string({
        invalid_type_error: '',
        required_error: ''
      }),
      enchantments: array(object({
        id: string({
          invalid_type_error: '',
          required_error: ''
        }),
        lvl: zEnum(['1', '2', '3', '4', '5'] || ['I', 'II', 'III', 'IV', 'V'], {
          invalid_type_error: '',
          required_error: ''
        })
      })).optional(),
      material: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      name_tool: string({
        invalid_type_error: '',
        required_error: ''
      }),
      others: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      use_of_tool: string({
        invalid_type_error: '',
        required_error: ''
      }).optional(),
      version: zEnum([
        '1.X',
        '1.4',
        '1.5',
        '1.6',
        '1.7',
        '1.8',
        '1.9',
        '1.10',
        '1.11',
        '1.12',
        '1.13',
        '1.14',
        '1.15',
        '1.16',
        '1.17',
        '1.18',
        '1.19',
        '1.20'
      ])
    }), {
      invalid_type_error: '',
      required_error: ''
    })
  }, {
    invalid_type_error: armors.invalid_type_error,
    required_error: armors.required_error
  }),
  weapons: object({
    // bows: array(),
    // swords: array()
  }),
})


