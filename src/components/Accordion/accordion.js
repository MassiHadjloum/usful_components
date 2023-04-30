
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { MdAddCircleOutline } from 'react-icons/md'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './accordion.scss'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: '1px solid #23272A',
  '&:last-child': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => {
  return (<MuiAccordionSummary
    expandIcon={props?.open ? <IoMdRemoveCircleOutline size={47} color={"black"}/> : <MdAddCircleOutline size={47} color={"black"} />}
    {...props}
  />)
  })(({ theme }) => ({
  padding: '20px 0',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',  
    transition: 'all .2s',
  },
  '@media (max-width: 499px)': {
    padding: '20px 40px'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    '& p': {
      fontSize: '25px',
      paddingRight: 135,
      fontWeight: 700,
    } 
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0px 20px 30px 20px',
  fontSize: 17,
  '@media (max-width: 499px)': {
    padding: '0px 60px 30px 60px',
    fontSize: '23px !important'
  },
}));

const CustomAccordion = ({listFaq}) => {
  const [expanded, setExpanded] = useState(0);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ padding: '0 150px 100px 150px' }}>
      {listFaq?.map((faq, index) => (
        <Accordion key={faq?.id} expanded={expanded === index} onChange={handleChange(index)}>
        <AccordionSummary open={expanded === index} aria-controls={`panel1d-${faq?.id}`} id={`panel1d-${faq?.id}`}>
          <Typography>{faq?.title?.toUpperCase()} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq_text'>
            {faq?.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}

export default CustomAccordion;