import {roomApi} from 'api/roomApi';
import {UpdateAgora} from 'meeting/meeting.type';
import MeetingContext from 'meeting/MeetingContext';
import {useContext} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Heading3} from './CustomizedText';

type FormData = {
  roomName: string;
  username: string;
  description: string;
};

interface Props {
  joinRoom: () => void;
}

export default function CreateMeetingForm({joinRoom}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      roomName: '',
      username: '',
      description: '',
    },
  });

  const dispatch = useContext(MeetingContext).MeetingDispatch;

  const handleCreateRoom = async (data: FormData) => {
    try {
      const res = await roomApi.createRoom({
        user: {
          username: data.username,
        },
        room: {
          roomName: data.roomName,
          description: data.description,
        },
        agora: {
          role: 'PUBLISHER',
          uid: 1,
        },
      });
      const {rtcToken, rtmToken, channel} = res.data.agora;
      const {roomCode, roomId, roomName, description} = res.data.room;
      const updateAgora: UpdateAgora = {
        rtcToken,
        rtmToken,
        channel,
        roomId,
        roomDescription: description,
        roomName,
        roomCode,
        username: data.username,
      };
      dispatch({type: 'update_agora', payload: updateAgora});
      joinRoom();
    } catch (error: any) {
      Alert.alert('Can not create data!');
      console.log(JSON.stringify(error));
    }
  };

  const onSubmit = (data: FormData) => handleCreateRoom(data);

  return (
    <View>
      <Text className="py-2 ">Username:</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className=" bg-white p-2 border border-gray-300 rounded-md "
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username && (
        <Text className="text-red-500">*This is required.</Text>
      )}

      <Text className="py-2 ">Meeting name: </Text>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className=" bg-white p-2 border border-gray-300 rounded-md "
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="roomName"
      />
      {errors.roomName && (
        <Text className="text-red-500">*This is required.</Text>
      )}

      <Text className="py-2 ">Description: </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className=" bg-white p-2 border border-gray-300 rounded-md"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />
      {errors.description && (
        <Text className="text-red-500">*This is required.</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="items-end mt-6">
        <Heading3 className="bg-[#00AC47] py-2 px-4 rounded-md text-white font-semibold">
          Create Room
        </Heading3>
      </TouchableOpacity>
    </View>
  );
}
