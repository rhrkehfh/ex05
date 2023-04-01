import React, { useEffect, useState } from 'react'
import { Row, Col, Table } from 'react-bootstrap';

const PostsPage = () => {
    const [list, setList] = useState([]);

    const [loading, setLoading] = useState(false);

    const getPosts = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setList(json);
            setLoading(false);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    if(loading) return <h1 className='text-center my-5'>로딩중</h1>
    return (
        <Row className='justify-content-center'>
            <Col md={10}>
                <h1 className='text-center my-5'>게시글</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <td>ID.</td>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(posts =>
                            <tr key={posts.id}>
                                <td>{posts.id}</td>
                                <td>
                                    <div className='ellipsis'>{posts.title}</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default PostsPage