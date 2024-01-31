import { WayToTeach } from './WayToteach';

import { ways } from '../data';

export function TeachingSection() {
    const block = ways.map((way) => {
        return <WayToTeach key={way.description} {...way} />;
    });
    return (
        <section>
            <h3>наш подход к обучению</h3>
            <ul>{block}</ul>
        </section>
    );
}
