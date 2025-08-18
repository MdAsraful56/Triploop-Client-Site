import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useAddTourTypeMutation } from '../../../../redux/features/tour/tour.api';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../ui/form';

type AddTourTypeFormValues = {
    name: string;
};

export function AddTourTypeModal() {
    const form = useForm<AddTourTypeFormValues>();

    const [addTourType] = useAddTourTypeMutation();

    const onSubmit = async (data: AddTourTypeFormValues) => {
        const res = await addTourType(data);
        if (res) {
            toast.success('Tour type added successfully');
        }
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant='outline'>Add Tour Type</Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Add Tour Type</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form
                            id='add-tour-type'
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder='Tour Type Name'
                                                {...field}
                                                value={field.value || ''}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant='outline'>Cancel</Button>
                        </DialogClose>
                        <Button form='add-tour-type' type='submit'>
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
