// @flow
import * as React from 'react';

export type Props = {};

const IconWarning = (props: Props) => (
  <svg viewBox="0 0 50 45" width={50} height={45} {...props}>
    <g fill="none" fillRule="evenodd">
      <path opacity={0.1} d="M0-2h50v50H0z" />
      <path
        d="M1.576 39.986C.5 41.85 1.192 43.05 3.346 43.05h43.308c2.152 0 2.846-1.2 1.77-3.064L26.768 2.48c-1.077-1.863-2.463-1.864-3.54 0L1.577 39.987zM22.293 1.94c1.495-2.59 3.922-2.583 5.414 0L49.36 39.444c1.496 2.59.277 4.688-2.706 4.688H3.344c-2.988 0-4.197-2.105-2.705-4.688L22.292 1.94z"
        fill="#F39A1E"
        fillRule="nonzero"
      />
      <path
        d="M24.232 5.05c.424-.736 1.116-.73 1.536 0L45.82 39.777c.424.735.072 1.33-.77 1.33H4.95c-.848 0-1.188-.602-.768-1.33l20.052-34.73z"
        fillOpacity={0.9}
        fill="#FDF4E7"
      />
      <path
        d="M20 38.5c0-.276.228-.5.51-.5h8.98a.51.51 0 0 1 .51.5c0 .276-.228.5-.51.5h-8.98a.51.51 0 0 1-.51-.5z"
        fill="#F39A1E"
        opacity={0.5}
      />
      <path
        d="M23.084 19.002A.906.906 0 0 1 24.009 18h1.98c.558 0 .972.456.926 1.002l-.832 9.996A1.106 1.106 0 0 1 25 30a1.115 1.115 0 0 1-1.084-1.002l-.832-9.996zM25 34a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        fill="#F39A1E"
      />
    </g>
  </svg>
);

export default IconWarning;