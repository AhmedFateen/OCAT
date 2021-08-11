import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
    alert(`Submitted successfully!`);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <label htmlFor="instrument">Instrument:</label>
        <input type="text" id="instrument" readOnly="readOnly" />
      </Form.Group>
      <Form.Group>
        <label htmlFor="catName">Cat Name:</label>
        <input type="text" name="catName" id="catName" placeholder="Cat Name" {...register(`CatName`,
          { required: true })} />
      </Form.Group>
      <Form.Group>
        <label htmlFor="dateOfBirth">Cat Date of Birth:</label>
        <input type="date" id="dateOfBirth" {...register(`CatDateOfBirth`, { required: true })} />
      </Form.Group>
      <Form.Group>
        <label htmlFor="previousContact">Previous Contact with the Cat Judicial System:</label>
        <label htmlFor="noPreviousContact">No</label>
        <input {...register(`PreviousContact`,
          { required: true })} type="radio" value="0" id="noPreviousContact" />&nbsp;
        <label htmlFor="yesPreviousContact">Yes</label>
        <input {...register(`PreviousContact`,
          { required: true })} type="radio" value="1" id="yesPreviousContact" />
      </Form.Group>
      <Form.Group>
        <label htmlFor="altercationsWithCats">Physical altercations with other cats:</label>
        <label htmlFor="0-3 altercations">0-3 altercations</label>
        <input {...register(`PhysicalAltercationsWithOtherCats`,
          { required: true })} type="radio" value="0" />&nbsp;
        <label htmlFor="3+ altercations">3+ altercations</label>
        <input {...register(`PhysicalAltercationsWithOtherCats`,
          { required: true })} type="radio" value="1" />
      </Form.Group>
      <Form.Group>
        <label htmlFor="altercationsWithOwner">Physical altercations with owner (scratching, biting, etc...): </label>
        <label htmlFor="0-10 altercations">0-10 altercations</label>
        <input {...register(`PhysicalAltercationsWithOwner`,
          { required: true })} type="radio" value="0" />&nbsp;
        <label htmlFor="10+ altercations">10+ altercations</label>
        <input {...register(`PhysicalAltercationsWithOwner`,
          { required: true })} type="radio" value="1" />
      </Form.Group>
      <Form.Group>
        <label htmlFor="goodWithDogs">Plays well with dogs:</label>
        <label htmlFor="noDogs">No</label>
        <input {...register(`PlaysWellWithDogs`,
          { required: true })} type="radio" value="1" id="noDogs" />&nbsp;
        <label htmlFor="yesDogs">Yes</label>
        <input {...register(`PlaysWellWithDogs`,
          { required: true })} type="radio" value="0" id="yesDogs" />
      </Form.Group>
      <Form.Group>
        <label htmlFor="hisses">Hisses at strangers:</label>
        <label htmlFor="noHisses">No</label>
        <input {...register(`HissesAtStrangers`,
          { required: true })} type="radio" value="0" id="noHisses" />&nbsp;
        <label htmlFor="yesHisses">Yes</label>
        <input {...register(`HissesAtStrangers`,
          { required: true })} type="radio" value="1" id="yesHisses" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>

    </Form>
  );
};
