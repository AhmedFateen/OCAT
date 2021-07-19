import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="instrument">Instrument:&nbsp;</label>
      <input type="text" id="instrument" readonly="readonly" />
      <br />
      <label htmlFor="catName">Cat Name:&nbsp;</label>
      <input type="text" id="catName" placeholder="Cat Name" {...register(`Cat Name`, { required: true })} />
      <br />
      <label htmlFor="dateOfBirth">Cat Date of Birth:&nbsp;</label>
      <input type="date" id="dateOfBirth" {...register(`Cat Date of Birth`, { required: true })} />
      <br />
      <label htmlFor="previousContact">Previous Contact with the Cat Judicial System:&nbsp;</label>
      <label htmlFor="noPreviousContact">No&nbsp;</label>
      <input {...register(`Previous Contact with the Cat Judicial\
       System`, { required: true })} type="radio" value="0" id="noPreviousContact" />
      <label htmlFor="yesPreviousContact">Yes&nbsp;</label>
      <input {...register(`Previous Contact with the Cat Judicial\
       System`, { required: true })} type="radio" value="1" id="yesPreviousContact" />

      <br />
      <label htmlFor="altercationsWithCats">Physical altercations with other cats:&nbsp;</label>
      <label htmlFor="0-3 altercations">0-3 altercations&nbsp;</label>
      <input {...register(`Physical altercations with other cats`, { required: true })} type="radio" value="0" />
      <label htmlFor="3+ altercations">3+ altercations&nbsp;</label>
      <input {...register(`Physical altercations with other cats`, { required: true })} type="radio" value="1" />
      <br />
      <label htmlFor="altercationsWithOwner">Physical altercations with owner (scratching, biting, etc...): </label>
      <label htmlFor="0-10 altercations">0-10 altercations&nbsp;</label>
      <input {...register(`Physical altercations with owner`, { required: true })} type="radio" value="0" />
      <label htmlFor="10+ altercations">10+ altercations&nbsp;</label>
      <input {...register(`Physical altercations with owner`, { required: true })} type="radio" value="1" />
      <br />
      <label htmlFor="goodWithDogs">Plays well with dogs:&nbsp;</label>
      <label htmlFor="noDogs">No&nbsp;</label>
      <input {...register(`Plays well with dogs`, { required: true })} type="radio" value="1" id="noDogs" />
      <label htmlFor="yesDogs">Yes&nbsp;</label>
      <input {...register(`Plays well with dogs`, { required: true })} type="radio" value="0" id="yesDogs" />
      <br />
      <label htmlFor="hisses">Hisses at strangers:&nbsp;</label>
      <label htmlFor="noHisses">No&nbsp;</label>
      <input {...register(`Hisses at strangers`, { required: true })} type="radio" value="0" id="noHisses" />
      <label htmlFor="yesHisses">Yes&nbsp;</label>
      <input {...register(`Hisses at strangers`, { required: true })} type="radio" value="1" id="yesHisses" />
      <br />
      <Button variant="primary" type="submit">Submit</Button>

    </form>
  );
};
