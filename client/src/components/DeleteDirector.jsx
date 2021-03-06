import { useMutation } from '@apollo/client'
import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { ActionContext } from '../contexts/ActionContext'
import { DELETE_DIRECTOR_BY_ID } from '../mutations/director'
import { GET_ALL_DIRECTORS } from '../queries/director'


export default function DeleteDirector() {
  const { directorId, showDeleteDirectorModal, openDeleteDirectorModal, closeDeleteDirectorModal } = useContext(ActionContext)
  const [deleteDirector] = useMutation(DELETE_DIRECTOR_BY_ID, {
    variables: { id: directorId },
    refetchQueries: [ GET_ALL_DIRECTORS ]
  })


  const handleDeleteDirector = () => {
    deleteDirector()
    closeDeleteDirectorModal()
  }


  return (
    <Modal 
      show={showDeleteDirectorModal} 
      onHide={() => openDeleteDirectorModal(directorId)} 
      id="deleteDirectorModal"
    >
      <Modal.Body>
        <h4 className="text-center">All films of this director will be deleted</h4>
        <h5 className="text-center">Do you want to continue?</h5>
        
        <br/>
        
        <div className="btn-group">
          <button 
            className="btn btn-danger"
            onClick={closeDeleteDirectorModal}
          >
            Cancel
          </button>

          <button 
            className="btn btn-success"
            onClick={handleDeleteDirector}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  )
}