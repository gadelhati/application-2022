import React, { useState, useEffect } from "react"
import Dropzone from "react-dropzone"
import { Card } from "react-bootstrap"

import { /*getFiles,*/ uploadFile } from "../../services/service.upload-files"

export const ShipSynopUpload = () => {
    const [selectedFiles, setSelectedFiles] = useState(undefined)
    const [currentFile, setCurrentFile] = useState(undefined)
    const [progress, setProgress] = useState(0)
    const [message, setMessage] = useState("")
    const [fileInfos, setFileInfos] = useState([]);

    useEffect(() => {
        // getFiles().then((response) => {
        //     setFileInfos(response.data)
        // });
    }, []);

    const upload = () => {
        let currentFile = selectedFiles[0]

        setProgress(0)
        setCurrentFile(currentFile)

        uploadFile(currentFile, (event: any) => {
            setProgress(Math.round((100 * event.loaded) / event.total))
        })
            .then((response) => {
                setMessage(response.data.message)
                // return getFiles()
            })
            .then((files) => {
                setFileInfos(files.data)
            })
            .catch(() => {
                setProgress(0)
                setMessage("Could not upload the file!")
                setCurrentFile(undefined)
            });

        setSelectedFiles(undefined)
    };

    const onDrop = (files) => {
        if (files.length > 0) {
            setSelectedFiles(files)
        }
    };

    return (
        <Card style={{ width: '100%' }}>
            <Card.Title>Upload Notes</Card.Title>
            {currentFile && (
                <div className="progress mb-3">
                    <div
                        className="progress-bar progress-bar-info progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: progress + "%" }}
                    >
                        {progress}%
                    </div>
                </div>
            )}

            <Dropzone onDrop={onDrop} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <Card>
                        <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {selectedFiles && selectedFiles[0].name ? (
                                <div className="selected-file">
                                    {selectedFiles && selectedFiles[0].name}
                                </div>
                            ) : (
                                "Drag and drop file here, or click to select file"
                            )}
                        </div>
                        
                        {/* 
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>File input</Form.Label>
                                <Form.Control type="file" 
                                disabled={!selectedFiles}
                                onClick={upload}/>
                            </Form.Group>
                         */}

                        <aside className="selected-file-wrapper">
                            <button className="btn btn-success" disabled={!selectedFiles} onClick={upload} >
                                Upload
                            </button>
                        </aside>
                        </Card>
                    </section>
                )}
            </Dropzone>

            <div className="alert alert-light" role="alert">
                {message}
            </div>

            {fileInfos.length > 0 && (
                <div className="card">
                    <div className="card-header">List of Files</div>
                    <ul className="list-group list-group-flush">
                        {fileInfos.map((file, index) => (
                            <li className="list-group-item" key={index}>
                                <a href={file.url}>{file.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Card>
    )
}