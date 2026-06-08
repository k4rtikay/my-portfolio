import { TegakiRenderer } from 'tegaki';
import bundle from '@/fonts/bundle/unknown/bundle';

export default function TegakiFont() {
    return (
        <TegakiRenderer
            font={bundle}
            time={{ mode: 'uncontrolled', speed: 3.5, loop: false }}
            style={{ fontSize: 36 }}
        >
            Kartikeya
        </TegakiRenderer>
    );
}