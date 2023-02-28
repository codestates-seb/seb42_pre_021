package com.roseknife.stackoverflow.utils;

import lombok.extern.java.Log;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.stereotype.Component;

import java.lang.reflect.Field;
import java.util.Collection;

@Component
public class CustomBeanUtils<T> {
    public T copyNonNullProperties(T source, T destination) {
        if (source == null || destination == null || source.getClass() != destination.getClass()) {
            return null;
        }

        final BeanWrapper src = new BeanWrapperImpl(source);
        final BeanWrapper dest = new BeanWrapperImpl(destination);


        for (final Field property : source.getClass().getDeclaredFields()) {
            Object sourceProperty = src.getPropertyValue(property.getName());
//            System.out.println("property.getN ceProperty()2 = " + sourceProperty);
//            if (sourceProperty != null && !(sourceProperty instanceof Collection<?>)) {
            if (sourceProperty != null) {
                System.out.println("src.getPropertyValue = " + src.getPropertyValue(property.getName()));
                System.out.println("dest(o).getPropertyValue = " + dest.getPropertyValue(property.getName()));
                dest.setPropertyValue(property.getName(), sourceProperty);
                System.out.println("sourceProperty = " + sourceProperty);
                System.out.println("property.getName() = " + property.getName());
                System.out.println("dest.getPropertyValue = " + dest.getPropertyValue(property.getName()));
            }
        }

        return destination;
    }
}
