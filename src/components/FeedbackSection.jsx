import { useState, useRef } from 'react';
import { Button } from './Button/Button';

function StateVsRef() {
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(event) {
        if (event.key === 'Enter') setShow(!show);
    }
    console.log(show);
    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input ref={input} type="text" className="control" onKeyDown={handleKeyDown} />
        </div>
    );
}

export function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        hasError: false,
    });

    // const [name, setName] = useState('');
    // const [hasError, setHasError] = useState(false);
    // const [reason, setReason] = useState('help');

    function handleNameChange(event) {
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }));
        // setName(event.target.value);
        // setHasError(event.target.value.trim().length === 0);
    }

    // function toggleError() {
    //     setForm((prev) => ({
    //         ...prev,
    //         hasError: !form.hasError,
    //     }));
    //     /// // setHasError(!hasError);
    // }

    return (
        <section>
            <h3>Обратная связь</h3>
            {/* <Button onClick={toggleError}>Toggle Error</Button> */}
            <form style={{ marginBottom: '1rem' }}>
                <label htmlFor="name">Ваше имя</label>
                <input
                    id="name"
                    className="control"
                    value={form.name}
                    type="text"
                    style={{
                        border: form.hasError ? '1px solid red' : null,
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({ ...prev, reason: event.target.value }))
                    }
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                {/* <pre>{JSON.stringify(form, null, 3)}</pre> */}

                <Button disabled={form.hasError} isActive={!form.hasError}>
                    Отправить
                </Button>
            </form>

            <StateVsRef />
        </section>
    );
}
