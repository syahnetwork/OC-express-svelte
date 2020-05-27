<script>
  import axios from "axios";
  import { fly } from "svelte/transition";
  import {
    Button,
    ButtonGroup,
    Col,
    Row,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Input,
    Label,
    Table
  } from "sveltestrap";
  import { onMount } from "svelte";

  let participants = [];

  let addParticipantForm = {
    label: "",
    subject_id: "",
    study_id: "",
    status_id: "",
    owner_id: "",
    oc_oid: ""
  };

  let editForm = {
    study_subject_id: "",
    label: "",
    subject_id: "",
    study_id: "",
    status_id: "",
    owner_id: "",
    oc_oid: ""
  };

  function getParticipants() {
    axios.get("http://localhost:3000/participant/").then(res => {
      participants = res.data;
    });
  }

  // getParticipants();

  function removeParticipant(participantId) {
    const path = `http://localhost:3000/participant/${participantId.participant.study_subject_id}`;
    axios
      .delete(path)
      .then(() => {
        getParticipants();
      })
      .catch(error => {
        console.error(error);
        getParticipants();
      });
  }

  function initForm() {
    addParticipantForm.label = "";
    addParticipantForm.study_id = "";
    addParticipantForm.subject_id = "";
    addParticipantForm.status_id = "";
    addParticipantForm.owner_id = "";
    addParticipantForm.oc_oid = "";

    editForm.study_subject_id = "";
    editForm.label = "";
    editForm.study_id = "";
    editForm.subject_id = "";
    editForm.status_id = "";
    editForm.owner_id = "";
    editForm.oc_oid = "";
  }

  function addParticipant() {
    const payload = {
      label: addParticipantForm.label,
      study_id: addParticipantForm.study_id,
      subject_id: addParticipantForm.subject_id,
      subject_id: addParticipantForm.status_id,
      subject_id: addParticipantForm.owner_id,
      subject_id: addParticipantForm.oc_oid
    };
    const path = "http://localhost:3000/participant/";

    axios
      .post(path, payload)
      .then(() => {
        getParticipants();
      })
      .catch(error => {
        console.log(error);
        getParticipants();
      });
    addtoggle();
  }

  function editParticipant(participant) {
    updatetoggle();
    editForm = participant.participant;
  }

  function updateParticipant() {
    const payload = {
      label: editForm.label,
      study_id: editForm.study_id,
      subject_id: editForm.subject_id,
      subject_id: editForm.status_id,
      subject_id: editForm.owner_id,
      subject_id: editForm.oc_oid
    };
    const path = `http://localhost:3000/participant/${editForm.study_subject_id}`;

    axios
      .put(path, payload)
      .then(() => {
        getParticipants();
      })
      .catch(error => {
        console.error(error);
        getParticipants();
      });
    updatetoggle();
  }

  onMount(getParticipants);
  let addopen = false;

  function addtoggle() {
    initForm();
    addopen = !addopen;
  }
  let updateopen = false;

  function updatetoggle() {
    initForm();
    updateopen = !updateopen;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</svelte:head>

<div>
  <div class="row">
    <div class="col-sm-12">
      <h1>Open Clinica Participants</h1>
      <hr />
      <br />
      <Button color="success" on:click={addtoggle}>Add Participant</Button>
      <br />
      <br />
      <Table hover>
        <thead>
          <tr>
            <th scope="col">study_subject_id</th>
            <th scope="col">label</th>
            <th scope="col">subject_id</th>
            <th scope="col">study_id</th>
            <th scope="col">status_id</th>
            <th scope="col">date_created</th>
            <th scope="col">owner_id</th>
            <th scope="col">oc_oid</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {#each participants as participant}
            <tr transition:fly={{ y: 48, duration: 200 }}>
              <td>{participant.study_subject_id}</td>
              <td>{participant.label}</td>
              <td>{participant.subject_id}</td>
              <td>{participant.study_id}</td>
              <td>{participant.status_id}</td>
              <td>{participant.date_created}</td>
              <td>{participant.owner_id}</td>
              <td>{participant.oc_oid}</td>
              <td>
                <span style="float: right;">
                  <Button
                    color="warning"
                    on:click={editParticipant({ participant })}>
                    Update
                  </Button>
                  <Button
                    color="danger"
                    on:click={removeParticipant({ participant })}>
                    Delete
                  </Button>
                </span>
              </td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </div>
  </div>

  <Modal isOpen={addopen} {addtoggle}>
    <ModalHeader {addtoggle}>Add a new participant</ModalHeader>
    <ModalBody>
      <Label for="">Label:</Label>
      <Input
        type="text"
        bind:value={addParticipantForm.label}
        placeholder="addParticipantForm.label" />
      <p />
      <Label for="">study_id:</Label>
      <select name="" id="" bind:value={addParticipantForm.study_id}>
        {#each participants as participant}
          <option value={participant.study_id}>{participant.study_id}</option>
        {/each}
      </select>
      <p />
      <Label for="">subject_id:</Label>
      <Input
        type="text"
        bind:value={addParticipantForm.subject_id}
        placeholder="addParticipantForm.subject_id" />
      <p />
      <Label for="">status_id:</Label>
      <Input
        type="text"
        bind:value={addParticipantForm.status_id}
        placeholder="addParticipantForm.status_id" />
      <p />
      <Label for="">owner_id:</Label>
      <select name="" id="" bind:value={addParticipantForm.owner_id}>
        {#each participants as participant}
          <option value={participant.owner_id}>{participant.owner_id}</option>
        {/each}
      </select>
      <p />
      <Label for="">oc_oid:</Label>
      <Input
        type="text"
        bind:value={addParticipantForm.oc_oid}
        placeholder="addParticipantForm.oc_oid" />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={addParticipant}>Add Participant</Button>
      <Button color="secondary" on:click={addtoggle}>Cancel</Button>
    </ModalFooter>
  </Modal>

  <Modal isOpen={updateopen} {updatetoggle}>
    <ModalHeader {updatetoggle}>Update participant</ModalHeader>
    <ModalBody>
      <Label for="">label:</Label>
      <Input type="text" bind:value={editForm.label} placeholder="label" />
      <p />
      <Label for="">study_id:</Label>
      <Input
        type="text"
        bind:value={editForm.study_id}
        placeholder="study_id" />
      <p />
      <Label for="">subject_id:</Label>
      <Input
        type="text"
        bind:value={editForm.subject_id}
        placeholder="subject_id" />
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={updateParticipant}>Update</Button>
      <Button color="secondary" on:click={updatetoggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
