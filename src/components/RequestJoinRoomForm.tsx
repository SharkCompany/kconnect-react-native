import {roomApi} from 'api/roomApi';
import {generateUid} from 'helpers/utils';
import {Controller, useForm} from 'react-hook-form';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Heading3} from './CustomizedText';

type FormData = {
  username: string;
  roomCode: string;
};

export default function RequestJoinRoomForm() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      roomCode: '',
      username: '',
    },
  });

  const handleRequestJoinRoom = async (data: FormData) => {
    console.log(data);
    try {
      const res = await roomApi.requestJoinRoom({
        user: {
          username: data.username,
        },
        room: {
          roomCode: parseInt(data.roomCode),
        },
        agora: {
          role: 'SUBCRIBER',
          uid: generateUid(),
        },
      });
      console.log(res.data);
    } catch (error: any) {
      Alert.alert(error.response.data);
      console.log(JSON.stringify(error.response.data));
    }
  };

  const onSubmit = (data: FormData) => handleRequestJoinRoom(data);

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

      <Text className="py-2 ">Room Code:</Text>
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
            value={value?.toString()}
            keyboardType="numeric"
          />
        )}
        name="roomCode"
      />
      {errors.username && (
        <Text className="text-red-500">*This is required.</Text>
      )}

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="items-end mt-6">
        <Heading3 className="bg-[#00AC47] py-2 px-4 rounded-md text-white font-semibold">
          Join
        </Heading3>
      </TouchableOpacity>
    </View>
  );
}
