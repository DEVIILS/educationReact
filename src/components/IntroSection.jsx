// export function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Result Univertsity</h1>
//             <h3 className="centered">
//                 Университет fronted-разработки, который насыщает IT-сферу квалифицированными
//                 программистами
//             </h3>
//         </section>
//     );
// }

import React from 'react';

const e = React.createElement;

export function IntroSection() {
    return e('section', null, [
        e('h1', { className: 'centered', key: crypto.randomUUID() }, 'Result Univertsity'),
        e(
            'h3',
            { className: 'centered', style: { color: '#666' }, key: crypto.randomUUID() },
            'Университет fronted-разработки, который насыщает IT-сферу квалифицированными программистами'
        ),
    ]);
}
