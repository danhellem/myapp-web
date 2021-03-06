/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Button, Link } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { alpha } from '@material-ui/core';
import { UserStatus } from 'helpers/enums';

class Success extends React.Component<IProps, {}> {
  static defaultProps: Partial<IProps> = {};  

  render() {
    return (

      <Box marginBottom={4}>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginBottom={2}
        >
          <Box
            component={Avatar}
            width={'100%'}
            height={'100%'}
            marginBottom={2}
            bgcolor={alpha(this.props.theme.palette.primary.main, 0.0)}
            color={this.props.theme.palette.primary.main}
          >
            <svg
              height={200}
              width={200}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Box>
        </Box>      

        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          Check your inbox
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          We sent you a new message with a link to reset your password.       
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            size={'large'}
            variant={'outlined'}
            component={Link}
            href={'/'}
          >
            Back to Home
          </Button>
        </Box>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>

          <Typography variant={'subtitle2'}>
            Didn't revieve an email from us?{' '}
            <Link
              component={'a'}
              color={'primary'}
              href={'/send-code'}
              underline={'none'}
            >
              Try again and we will resend you a new code
            </Link>
          </Typography>
        </Box>             
             
      </Box>
    );
  }
}

export default Success;

interface IProps {
  theme: Theme;
  status: UserStatus;
}
