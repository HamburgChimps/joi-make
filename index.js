const joi = require('joi')

const exampleSchema = joi.object({
  orange: joi.string().required(),
  red: joi
    .object({
      black: joi.string().required(),
      blue: joi.string().required(),
    })
    .required(),
  yellow: joi
    .object({
      green: joi.string().required(),
      magenta: joi.string().required(),
    })
    .required(),
  white: joi.string().required(),
  gold: joi.string().required(),
  pink: joi.object({
    yes: joi.object({
      no: joi.object({
        maybeSo: joi.object({
          really: joi.string().required(),
          okay: joi.string().required(),
        }),
        couldBe: joi.object({
          really: joi.string().required(),
          ok: joi.string().required(),
        }),
      }),
    }),
    whatsUp: joi.object({
      hey: joi.object({
        maybeSo: joi.object({
          really: joi.string().required(),
          okay: joi.string().required(),
        }),
        couldBe: joi.object({
          really: joi.string().required(),
          ok: joi.string().required(),
        }),
      }),
    }),
    soHeresTheDeal: joi.object({
      imNotSure: joi.object({
        aboutThis: joi.object({ soISaid: joi.string().required() }),
      }),
    }),
  }),
  somethingIKnow: joi.object({
    somethingIHave: joi.object({
      wonInBattle: joi.object({
        isNotImportantButKindOfIs: joi.string().required(),
      }),
    }),
  }),
  somethingIHave: joi.object({
    neverKnown: joi
      .object({
        isThat: joi.string().required(),
        tacosAreDelicious: joi.string().required(),
      })
      .required(),
    butSoIs: joi.object({
      tacoBell: joi.string().required(),
      burgerKing: joi.string().required(),
      mcdonalds: joi.object({
        arbys: joi.string().required(),
      }),
    }),
    andAgain: joi.object({
      tacoBell: joi.string().required(),
      burgerKing: joi.string().required(),
      mcdonalds: joi.object({
        arbys: joi.string().required(),
      }),
    }),
  }),
  lastOne: joi.object({
    neverKnown: joi
      .object({
        isThat: joi.string().required(),
        tacosAreDelicious: joi.string().required(),
      })
      .required(),
    butSoIs: joi.object({
      tacoBell: joi.string().required(),
      burgerKing: joi.string().required(),
      mcdonalds: joi.object({
        arbys: joi.string().required(),
      }),
    }),
    andAgain: joi.object({
      tacoBell: joi.string().required(),
      burgerKing: joi.string().required(),
      mcdonalds: joi.object({
        arbys: joi.string().required(),
      }),
    }),
  }),
});

module.exports = function buildSchemaObjectModel(schemaInfo, out = {}, traverser = {}, acc = {}) {

  console.log(JSON.stringify(exampleSchema))

  console.log('not yet functional! Please check back later!')

  const nextTraverser = {};

  if (schemaInfo.key) {
    Object.assign(traverser, { [schemaInfo.key]: nextTraverser });
    Object.assign(out, acc);
    acc = traverser;
  }

  if (schemaInfo._inner && schemaInfo._inner.children) {
    schemaInfo._inner.children.forEach(c => buildSchemaObjectModel(c, out, nextTraverser, acc));
  }

  if (schemaInfo.schema._inner && schemaInfo.schema._inner.children) {
    schemaInfo.schema._inner.children.forEach(c => buildSchemaObjectModel(c, out, nextTraverser, acc));
  }
}
