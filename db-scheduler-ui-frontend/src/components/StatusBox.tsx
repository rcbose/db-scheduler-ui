import { Box } from '@chakra-ui/react';
import { FailureCircle } from 'src/components/FailureCircle';

interface StatusBoxProps {
  status: string;
  consecutiveFailures: number;
}

const statusColors: Record<
  string,
  { borderColor: string; backgroundColor: string; color: string }
> = {
  Failed: {
    borderColor: '#BB0101',
    backgroundColor: '#EFC2C2',
    color: '#BB0101',
  },
  Running: {
    borderColor: '#DAE2F6',
    backgroundColor: '#DAE2F6',
    color: '#000000',
  },
  Scheduled: {
    borderColor: '#F1F2F5',
    backgroundColor: '#F1F2F5',
    color: '#000000',
  },
};

export const StatusBox: React.FC<StatusBoxProps> = ({
  status,

  consecutiveFailures,
}) => {
  const statusInfo = statusColors[status] || statusColors['Scheduled'];
  const { borderColor, backgroundColor, color } = statusInfo;

  return (
    <Box
      borderRadius={4}
      mr={4}
      width={115}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      color={color}
      px={4}
      py={1}
      borderWidth={1}
      position="relative"
    >
      {consecutiveFailures > 0 ? (
        <FailureCircle
          consecutiveFailures={consecutiveFailures}
        ></FailureCircle>
      ) : (
        <></>
      )}

      {status}
    </Box>
  );
};
