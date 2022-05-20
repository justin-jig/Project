package com.ingeun.web.common.lambda;

import org.springframework.stereotype.Component;

/**
 * IConsumer
 */
@FunctionalInterface
public interface IConsumer {

    public abstract void accept(Object o);
    

}