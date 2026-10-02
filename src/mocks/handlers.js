import { graphql } from 'msw';

export const handlers = [

  graphql.query('GetMyCourses', (req, res, ctx) => {
    return res(
      ctx.data({
        // TODO
      })
    );
  }),

  graphql.query("GetMyAssignments", (req, res, ctx) => {
    return res(
      ctx.data({
        // TODO
      })
    )
  })
];