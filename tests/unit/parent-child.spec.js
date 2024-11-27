// Importar utilidades de Vue Test Utils para montar los componentes
import { shallowMount } from '@vue/test-utils';

// Importar los componentes a probar
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

// Definir la suite de pruebas para los componentes Parent y Child
describe('Parent.vue y Child.vue', () => {
  // Primera prueba: verificar que el componente Parent actualice el mensaje correctamente
  it('debería actualizar el mensaje en el componente Parent al recibirlo desde Child', async () => {
    // Montar el componente Parent
    const wrapper = shallowMount(Parent);
    // Buscar el componente Child dentro del Parent montado
    const childComponent = wrapper.findComponent(Child);

    // Definir un mensaje de prueba que se emitirá desde el componente Child
    const mensaje = 'Hola desde Child!';
    // Emitir el evento 'mensaje-enviado' desde el componente Child con el mensaje de prueba
    await childComponent.vm.$emit('mensaje-enviado', mensaje);

    // Verificar que el componente Parent haya recibido y mostrado el mensaje emitido por el Child
    expect(wrapper.text()).toContain(mensaje);
  });

  // Segunda prueba: verificar que el componente Child emita un evento al hacer clic en el botón
  it('debería enviar un mensaje desde Child al hacer clic en el botón', async () => {
    // Montar el componente Child
    const wrapper = shallowMount(Child);
    // Encontrar el campo de entrada y el botón dentro del componente Child
    const input = wrapper.find('input');
    const button = wrapper.find('button');

    // Establecer un valor en el campo de entrada
    input.setValue('Mensaje de prueba');
    // Simular un clic en el botón
    await button.trigger('click');

    // Verificar que el evento 'mensaje-enviado' haya sido emitido por el componente Child
    expect(wrapper.emitted('mensaje-enviado')).toBeTruthy();
    // Verificar que el evento 'mensaje-enviado' haya sido emitido con el valor correcto ('Mensaje de prueba')
    expect(wrapper.emitted('mensaje-enviado')[0]).toEqual(['Mensaje de prueba']);
  });
});
