import { useEffect, useCallback } from 'react';
import { useState } from 'react';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { useInput } from './hooks/useInput';

export function EffectsSection() {
    const input = useInput();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <section>
            <h3>Effect</h3>

            <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
                Открыть информацию
            </Button>
            <Modal open={modal}>
                <h3>Hello from Modal</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam quasi
                    porro ea animi ad quia nobis eveniet nulla. Inventore beatae blanditiis enim
                    repudiandae quam suscipit reiciendis porro ut quisquam.
                </p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <input {...input} />
                    <ul>
                        {users
                            .filter((user) =>
                                user.name.toLowerCase().includes(input.value.toLowerCase())
                            )
                            .map((user, index) => (
                                <li key={index}>{user.name}</li>
                            ))}
                    </ul>
                </>
            )}

            {/* {loading && <p>Loading...</p>}
            {!loading && (
                <ul>
                    {users.map((user) => (
                        <li key={crypto.randomUUID()}>{user.name}</li>
                    ))}
                </ul>
            )} */}
        </section>
    );
}
